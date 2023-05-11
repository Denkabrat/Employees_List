import './employers-list-item.css';



const EmployersListItem = (props) => {

   

    

        const {name,salary,onDelete,onToggleProp,increase,star,onChangeSalary} = props;

        
        let classNames = "list-group-item d-flex justify-content-between";

        if(increase){
            classNames += " increase";
        }
        if(star){
            classNames += " like";
        }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle='star'
                  style={{fontSize:19}}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} onChange={(e) => onChangeSalary(e.target.value, name)} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
    };
       


export default EmployersListItem;