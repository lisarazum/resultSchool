import './App.css';
import { InputText } from './components/InputText/InputText.jsx';
import { ManyInputs } from './components/ManyInputs/ManyInputs.jsx';
import { Select } from './components/Select/Select.jsx';
import { ReactSelect } from './components/ReactSelect/ReactSelect.jsx';
import { Validation } from './components/Validation/Validation.jsx';
import { Yup } from './components/Yup/Yup.jsx';
import { UseRef } from './components/UseRef/UseRef.jsx';
import { HookForm } from './components/HookForm/HookForm.jsx';

function App() {
	return (
		<>
			<InputText />

			<ManyInputs />

			<Select />

			<ReactSelect />

			<Validation />

			<div>
				Yup
				<Yup />
			</div>

			<UseRef />

			<HookForm />
		</>
	);
}

export default App;
