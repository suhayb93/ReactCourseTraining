
const element = React.createElement;

const ReactButton = element('button',
    { onClick: () => console.log('I am a react button') },
    'Submit')


const container = document.getElementById('root');

const root = ReactDOM.createRoot(container)

root.render(ReactButton)
