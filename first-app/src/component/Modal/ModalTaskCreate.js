import './Modal.css'
import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTask, setTasks} from "../../redux/store/taskSlice";
import getPeople from "../../rest/person/getPeople";

export default (props) => {
    if (!props.show) {
        return null
    }

    const { onClose } = props;
    const closeOnEscapeKeyDown = useCallback((e) => {
        if ((e.charCode || e.keyCode) === 27 ) {
            props.onClose()
        }
    }, [onClose]);

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [closeOnEscapeKeyDown]);

    const dispatch = useDispatch()
    const fullNames = useSelector(state => state.toolPerson.todos)

    const description = useRef(null)
    const priorityArr = useRef(null)
    const selectValue = useRef(null)

    return (
        <div className={'modal'} onClick={props.onClose}>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <div className={'modal-header'}>
                    <h4 className={'modal-title'}>{props.title}</h4>
                </div>

                <div className={'modal-body'}>
                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Описание</label>
                        <textarea className={'modal-textarea'} ref={description}/>
                    </div>
                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Отвественный</label>
                        <select id={'selectValue'} ref={selectValue} className={'modal-select'}>

                            {fullNames.map((val) => {
                                return (
                                    <option value={val.id}>
                                        {val.surName} {val.name} {val.middleName}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Приоритет</label>
                        <input type={"number"} className={'modal-input-number'} ref={priorityArr} />
                    </div>
                </div>

                <div className={'modal-footer'}>
                    <button onClick={props.onClose} className={'btn_add'}>Отмена</button>
                    <div className={'buttons_left'}>
                        <button className={'btn_add'} onClick={async () => {

                            dispatch(createTask({
                                description: description.current.value,
                                personFullName: selectValue.current.text,
                                priority: priorityArr.current.value,
                                fullNamePerson: selectValue.current.value
                            }));
                            const response = await getPeople()
                            dispatch(setTasks(response))
                            props.onClose();
                        }}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}