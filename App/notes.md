### JSX is NOT HTML
jsx is javascript extension that converts by compiler to react.CreateElement nested calls

### react class vs functional components
- class has lifecycle methods and state , functional has hooks that is not covered in the course
- class extends Component and must have render that returns JSX , functional is returning JSX

### for js arrays : 
- to edit : use map ex: arr.map(item=>item*2)
- to remove : use filter arr.filter(item=>conditionToKeepItemIfTrue)
- to add : use spread [...arr , newItem] or [newItem , ...arr]

### controlled component:
- add state {relevantName}
- for the input add name props = the name in the state
- onChange , change the state
- default value should be the state

### onClick events :
never ever send a function call
ex `onChange={func(input)}` this will call the function infinitely without even clicking
instead : `onChange={()=>{func(input)}}` use anonymous functions