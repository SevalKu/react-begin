import React from "react";

class Collapse extends React.Component{

    constructor(){
        super();

        this.state ={
           showContent:true
 
        }
        
    }
    showMore = () => {
        this.setState({showContent: !this.state.showContent})
    } 
render() {
return (
    <div>
        
         <a className="btn btn-primary w-100" onClick={this.showMore} >
         
         {React.Children.map(this.props.children, children => children.props.cardTitle)}
         </a>

         {
             this.state.showContent ? (
                 <div className="collapse show" >
            
            {React.Children.map(this.props.children, children => children)}
           
         </div>
             ): null
         }

         
    </div>
)
}
}
export default Collapse;