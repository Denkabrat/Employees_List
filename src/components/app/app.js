import { Component }     from 'react';
import AppInfo           from '../app-info/app-info';
import SearchPanel       from '../search-panel/search-panel';
import AppFilter         from '../app-filter/app-filter'
import EmployersList     from '../employers-list/employers-list';
import EmployersAddForm  from '../employers-add-form/employers-add-form';
import './app.css';

class App extends Component{


    constructor(props){
        super(props);
        this.state = {
        data : [
                {name:'Matvey.Z' ,salary:1800, increase: false, rise:false, id:1},
                {name:'Alex.P'   ,salary:2000, increase: false, rise:false, id:2},
                {name:'Denis.A'  ,salary:4800, increase: false, rise:false, id:3}, 
                ],
                term:'',
                filter:'all'
                    }
        this.maxId = 4;
    }

   deleteItem = (id) => {

    this.setState(({data}) => {
            return {
                data:data.filter(item => item.id !== id)
               }
        })
   }

   addItem = (name,salary) => { 
        const newItem = {
            name,
            salary,
            increase:false,
            rise:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        });
   }


   onToggleProp = (id,prop) => {
        this.setState(({data})=> ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))

   }

//    onToggleRise = (id) => {
//     this.setState(({data})=> ({
//         data: data.map(item => {
//             if(item.id === id){
//                 return {...item, star: !item.star}
//             }
//             return item;
//         })
//     }))
//    }

   seachEmp = (items,term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
   }

   onUpdateSearch = (term) => {
    this.setState({term:term});
   }

   filterPost = (items,filter) => {
        switch(filter){
            case 'rise':
                return items.filter(item => item.star === true);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
   }

   onFilterSelect = (filter) => {
          this.setState({filter})
   }

   onChangeSalary = (newSalary, name) => {
    this.setState(({ data }) => ({
        data: data.map(person => {
            if (person.name === name) {
                return {...person, salary: newSalary}
            }
            return person
        })
    }))
}




    render(){
        const {data,term,filter}   =   this.state;
        const employers            =   this.state.data.length;
        const increased            =   this.state.data.filter(item => item.increase === true).length;
        const visibleData          =   this.filterPost(this.seachEmp(data,term),filter);
    
        return (
            <div className="app">
                <AppInfo employers={employers} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployersList 
                onChangeSalary={this.onChangeSalary}
                data = {visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp} />
                <EmployersAddForm onAdd={this.addItem}/>

            </div>
    
        );
    };
}
export default App;


