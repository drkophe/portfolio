import './App.css'
import Badge from './components/Badge'
import Button from './components/Button'

function App() {


  return (
    <div>
      {/* <h1 className="">Hello World</h1> */}
      <div className='light border w-full h-fit p-4 flex flex-col justify-center items-center space-y-3'>

        <Button 
          size='small'
          type='tertiary'
          label='Label'
          leftIcon='Github'
          // rightIcon='Github'
          // iconSize='larger'
        />

        <Badge 
          size='small'
          type='primary'
          label='Label'
          chip=''
        />
        <Badge 
          size='medium'
          type='secondary'
          label='Label'
          chip='true'
        />
        <Badge 
          size='large'
          type='tertiary'
          label='Label'
          chip=''
        />
        <Badge 
          size='small'
          type='success'
          label='Label'
          chip=''
        />

      </div>
      <div className='dark border bg-slate-900 w-full h-fit p-4 flex flex-col justify-center items-center space-y-3'>

        <Button 
          size='large'
          type='tertiary'
          // label='Label'
          // leftIcon='Moon'
          rightIcon='Github'
          rounded='full'
        />

        <Badge 
          size='small'
          type='primary'
          label='Label'
          chip='true'
        />
        <Badge 
          size='medium'
          type='secondary'
          label='Label'
          chip='true'
        />
        <Badge 
          size='large'
          type='tertiary'
          label='Label'
          chip='true'
        />
        <Badge 
          size='small'
          type='success'
          label='Label'
          chip='true'
        />

      </div>

    </div>
  )
}

export default App
