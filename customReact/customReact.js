function customRender(reactElement, container){
    /* const domElement= document.createElement(reactElement.type)
    domElement.innerHML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement) */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
      if (prop === 'children') continue
      domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const ReactElement = {
  type : 'a',
  props :{
    href : 'https://reactjs.org/',
    target: '_blank',
  },
  children : 'Learn React'
}

const mainContainer = document.getElementById('root')

customRender(ReactElement,mainContainer)
