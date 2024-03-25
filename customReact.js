function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement)

}

reactElement = {
    type: 'a',
    props: {
        href: 'https:/google.com',
        target: '_blank'
    },
    children: 'visit google'
}
const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)