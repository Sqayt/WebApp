
export default () => {
    return(
        <div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Начальник</label>
                <select id={'selectValue'} style={{paddingLeft: "2%", width: "225px", height: "25px", marginLeft:"auto"}}>
                    <option>Михаил Задорнов Сергеевич</option>
                    <option>Александр Жуйков Сергеевич</option>
                </select>

            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Должность</label>
                <input className={'post'} name={'post'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Фамилия</label>
                <input className={'surName'} name={'surName'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Имя</label>
                <input className={'name'} name={'name'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Отчество</label>
                <input className={'middleName'} name={'middleName'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Название филиала</label>
                <input className={'branchName'} name={'myBranch'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
            </div>
        </div>
    )
}
