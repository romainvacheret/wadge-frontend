import React from 'react'
import axios from 'axios'

const foodlists=[];
class GetFoods extends React.Component { 

	constructor(props) {
		super(props);
		this.state = {foods: []};
	}

	componentDidMount() {
    axios.get('http://localhost:8080/food_list')
    .then(resp => {
      this.setState({ foods: resp.data })
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });
		// fetch('http://localhost:8080/food_list')
    //   .then(res => res.json())
    //   .then((data) => {
    //       this.setState({ foods: data })
    //   })
    //   .catch(console.log)
	}

	render() { 
		
		return (
			<FoodList foods={this.state.foods}/>
		)
		
	}
}
class FoodList extends React.Component{
  constructor(props){
    super(props)
    this.state={
        foodsFridge:[]
    }
    this.onsave=this.onsave.bind(this)
  }
  
    
  
	onsave(){
		
		console.log(foodlists)
    if(foodlists.length>1)
    {
      alert('Aliments ajoutés au Frigo avec succes')
      axios.post('http://localhost:8080/food',foodlists)
    .then(resp => {
      this.setState({ foodsFridge: resp.data })
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
        console.log("erreur")
    });
    // axios.post('http://localhost:8080/food',foodlists).then((response) => {
    //   console.log(response)
    //   console.log("envoi de la requete post vers le controler")
      
    // }).catch((error) => {
    //     console.log(error)
    //     console.log("erreur de transmission des données")
    // });
  }
    else{
    alert('Vous devz d\'abord ajouter des aliments au frigo')
}
    // this.setState({foodsFridge:foodlists})
    //on doi envoyer foodlist sur la partie back pour apres afficher cette liste de food rencenser
	}
	
	render() {
		const foods = this.props.foods.map(food =>
			<Food key={food.nom} food={food}/>
    )
     if(this.state.foodsFridge.length<1){
		return (
		
			<div>
             {/* <div  className="form-group">
                 <input type="text" className="form-control" placeholder="search"/>
                
             </div> */}
             <div className="container">
        <div className="col-xd-12">
          <img src="logo.png" className="imgcircle" style={{ width: 200, height: 200 }}/>
        </div>
        <div className="panel panel-primary">
        <div className="panel-heading">
          <h4>Rencenser Les Aliments</h4>
        </div>
        <div className="panel-body">
        <section className="col-sm-12 table-responsive">
        <table className="table table-bordered table-striped table-condensed" >
        <thead><tr><th className="info">Nom</th><th className="info">Type</th><th className="info">Vie</th><th className="info">Quantité</th><th className="info">Recenser</th></tr></thead>
				<tbody>
					{foods}
				</tbody>
				</table>
        </section>
        </div>
        </div>
        <button className="btn btn-success" onClick={this.onsave} ><span className="glyphicon glyphicon-ok-sign">Enregistrer</span> </button>
        </div>
        </div>
    )
            }
    else
      return(
        <MyFood myFoods={foodlists}/>
      )
	}
}

class Food extends React.Component{
	constructor(props){
	super(props)
    this.state = {
      quantity: 0,
      ischecked: false,
      date: new Date(),
      food:props.food
    
    }

    this.handlechecked = this.handlechecked.bind(this)
	this.handleQuantity = this.handleQuantity.bind(this)
}
handlechecked(e) {
	console.log(this.state.ischecked);
	this.setState({ ischecked: e.target.checked })
    var tab = {
      nom: '',
      products: {
        dateAjoutee: '',
        datelimite: '',
        quantity: '0'
      }
    };

    if ((this.state.ischecked === false)&&(this.state.quantity!=0)) {
      tab.products.dateAjoutee = this.state.date.toLocaleDateString()
      tab.products.quantity = this.state.quantity;
	  tab.nom = this.state.food.nom;
	  var dl=new Date()
		  dl.setDate(dl.getDate()+parseInt(this.state.food.vie))
		  tab.products.datelimite=dl.toLocaleDateString()
	  console.log("dl="+ tab.products.datelimite)	  
	  foodlists.push(tab);
    console.log(foodlists);	  
    //console.log("parseur json give"+JSON.parse(foodlists));
    }   
    console.log(this.state.ischecked);
  }
  handleQuantity(e) {
    this.setState({ quantity: e.target.value })
    console.log(this.state.quantity)
  }
	render() {
		return (
			<tr>
				<td>{this.props.food.nom}</td>
				<td>{this.props.food.type}</td>
				<td>{this.props.food.vie}</td>
				<td><div className="col-sm-3">
           <input className="form-control"
             type='number'
             value={this.state.quantity}
             onChange={this.handleQuantity}
           />
           </div>
         </td>
         <td>
           <button className='btn btn-info'>
             <input
               type='checkbox'
               checked={this.state.ischecked}
               onChange={this.handlechecked}
             />
           </button>
         </td>
				
			</tr>
		)
	}
}
class MyFood extends React.Component{
	constructor(props){
    super(props)
    this.state={
      myFoods:this.props.myFoods
    }
    this.delete=this.delete.bind(this)
		
  }
delete=(element)=>{
  var v=this.state.myFoods.pop()
  this.setDate({
    myFoods: v.pop(element)
  })
}

	render(){
		return (
      <div className="container">
        <div className="col-xd-12">
          <img src="logo.png" className="imgcircle" style={{ width: 150, height: 150 }}/>
        </div>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4>Mon Frigo</h4>
        </div>
        <div className="panel-body">
        {/* <table className="table table-striped" ></table> */}
			<div className="table-responsive">
  <table className="table table-striped">
    <thead><tr className="active"><th  className="success">Nom</th><th  className="success">Quantite</th><th  className="success">Date Ajoutée</th><th  className="success">Date Limite</th></tr></thead>
    <tbody className="success">{

    foodlists.map(element => {
      return (
         <tr key={element.nom} >
           <td>{element.nom}</td>
           <td>{element.products.quantity}</td>
           <td>{element.products.dateAjoutee}</td>
           <td>{element.products.datelimite}</td>
           {/* <td className="btn btn-success"><span className="glyphicon glyphicon-pencil"></span></td> */}
    
           {/* <td><button onClick="{delete(element)}"><span className="glyphicon glyphicon-trash"></span></button></td> */}
    </tr>
      )   
    })   
    }</tbody>
  </table>
  </div>
  </div>
</div>
</div>
		)
	    
	}
}
export default GetFoods