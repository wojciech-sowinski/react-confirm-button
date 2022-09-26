## "React Confirm Button"

## Description: 
Simple question before do action.
## Usage


import ConfirmButon from './ConfirmButton.jsx';

export default function App() {
  return (
    <div>
      <ConfirmButon
        text={'Do something'}
        confirmText={'Are you sure?'}
        onConfirm={() => { console.log('Confirmed!')}}
        barColor={'#be4d25'}
        timeout={3}
      />
    </div>
  );
}
