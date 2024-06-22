// import {Component} from 'react'
// import ClassComponent from './ClassComponent'

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to Google" />
//         <ClassComponent href="http://www.twitter.com" text="go to twitter" />
//       </ul>
//     )
//   }
// }

// export default function App() {
//   return <div>Hello function-keyword component!</div>
// }

// const App = () => {
//   return <h1>function component</h1>
// }

// export default App

import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'
export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="https://twitter.com" text="go to Twitter" />
    </ul>
  )
}
