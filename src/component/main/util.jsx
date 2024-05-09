import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import node from '../../assets/node.png'
import react from '../../assets/react.png'

export const getLogo = (category)=>{
    console.log(category)
    switch (category.toLowerCase()){
        case 'html' : return html;
        case 'css' : return css ;
        case 'js' : return js;
        case 'node' : return node ;
        case 'react' : return react ;
    }

}
