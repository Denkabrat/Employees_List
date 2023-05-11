import './app-filter.css'

const AppFilter = (props) => {

        const buttonsData = [
            {name:'all',label:'All employees'},
            {name:'rise',label:'For promotion'},
            {name:'moreThen1000',label:'More then 1000$'},
        ];

        const buttons = buttonsData.map(({name,label})=> {
            const active = props.filter === name;

            const clazz = active ? 'btn-light' : "btn btn-outline-light";

            return (
            <button className={`btn ${clazz}`}
             key ={name}
             type='button'
             onClick={()=> props.onFilterSelect(name)}>{label}
             </button>
            );
        })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;