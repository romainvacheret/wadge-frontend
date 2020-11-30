import React from 'react'
import axios from 'axios'

const foodlists=[];
class GetFoods extends React.Component { 

	constructor(props) {
		super(props);
    this.state = {foods: [],
      };
     
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

  }

	render() { 
		
		return (
      <div>
       
      <FoodList foods={this.state.foods} /> 
  
      </div>
		)
		
	}
}
class FoodList extends React.Component{
  constructor(props){
    super(props)
    this.state={
        foodsFridge:[],
        searchfood:''
        
    }
    this.onsave=this.onsave.bind(this)
    this.handlesearch=this.handlesearch.bind(this)
  }
  
    handlesearch(e){
      this.setState({searchfood:e.target.value})
    }
  
	onsave(){
		
		console.log(foodlists)


    if(foodlists.length>=1)
    {
      alert('Aliments ajoutés au Frigo avec succes')
      axios.post('http://localhost:8080/food',foodlists)
    .then(resp => {
        this.setState({foodsFridge:resp.data})
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
        console.log("erreur")
    });

  }
    else{
    alert('Vous devez d\'abord donner la quantité des aliments à ajouter au frigo')
}
     this.setState({foodsFridge:foodlists})

	}
	
	render() {

  const foods=[];
  this.props.foods.forEach(food=>{
    if(food.nom.indexOf(this.state.searchfood)===-1){
      return
    }
        
    foods.push(<Food key={food.nom} food= {food}/>);

  })

     if(foodlists.length<1){
		return (

      <div>
      <div className='col-xs-4'>
      <div className='form-group has-success"' >
      <div class="input-group">
       <input type='text' value={this.state.searchfood} className='form-control' onChange={this.handlesearch} placeholder='Recherche par nom' aria-describedby="inputSuccess2Status"/>
       </div>
       </div>
       </div>
			<div className= 'rencensement'>
           
             <div className="container">
        <div className="col-xd-12">
          <img src="logo.png" className="imgcircle" style={{ width: 333, height: 148 }}/>
        </div>
        <div className="panel panel-success">
        <div className="panel-heading">
          <h4>Rencenser Les Aliments</h4>
        </div>
        <div className="panel-body">
            <section className="col-sm-12 table-responsive">
        <table className="table table-bordered table-striped table-condensed" >
        <thead><tr><th className="warning">Nom</th><th className="warning">Type</th><th className="warning">Quantité</th><th className="warning">Recenser</th></tr></thead>
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
      quantite: 0,
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
    const tab = {
      nom: '',
      produits: {
        dateAjout: '',
        dateLimite: '',
        quantite: 0
      }
    };

    if ((this.state.ischecked === false)&&(this.state.quantite>0)) {
      tab.produits.dateAjout = this.state.date.toLocaleDateString()
      tab.produits.quantite = this.state.quantite;
	  tab.nom = this.state.food.nom;
	  const dl=new Date()
		  dl.setDate(dl.getDate()+parseInt(this.state.food.vie))
		  tab.produits.dateLimite=dl.toLocaleDateString()
	  console.log("dl="+ tab.produits.dateLimite)	  
	  foodlists.push(tab);
    console.log(foodlists);	  

    }   
    console.log(this.state.ischecked);
  }
  handleQuantity(e) {
    this.setState({ quantite: e.target.value })
    console.log(this.state.quantite)
  }
	render() {
		return (
			<tr>
				<td>{this.props.food.nom}</td>
				<td>{this.props.food.type}</td>

				<td><div className="col-sm-3">
           <input className="form-control"
             type='number'
             value={this.state.quantity}
             onChange={this.handleQuantity}
           />
           </div>
         </td>
                 <td>
           <button className='btn btn-success'>
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
		
  }

  // componentDidUpdate() {
  //   axios.get('http://localhost:8080/fridge')
  //   .then(resp => {
  //     this.setState({ myFoods: resp.data })
  //       console.log(resp.data);
  //   })
  //   .catch(err => {
  //       console.error(err);
  //   });
		
	// }


	render(){
		return (
      <div className="container">
        <div className="col-xd-12">
          <img src="logo.png" className="imgcircle" style={{ width: 333, height: 148 }}/>
        </div>
      <div className="panel panel-success">
        <div className="panel-heading">
          <h4>Ce que je viens d'ajouter</h4>
        </div>
        <div className="panel-body">
        {/* <table className="table table-striped" ></table> */}
			<div className="table-responsive">
  <table className="table table-striped">
    <thead><tr className="active"><th  className="warning">Nom</th><th  className="warning">Quantite</th><th  className="warning">Date Ajoutée</th><th  className="warning">Date Limite</th></tr></thead>
    <tbody className="success">{

    this.state.myFoods.map(element => {
      return (
         <tr key={element.nom} >
           <td>{element.nom}</td>
           <td>{element.produits.quantite}</td>
           <td>{element.produits.dateAjout}</td>
           <td>{element.produits.dateLimite}</td>
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