import ParticularsField from '../CommonComponents/ParticularsField';
import CustomButton from '../CommonComponents/CustomButton';

export default function RegisterPage(){
	const style = {
		width: '20em'
	};
	
	return(
		<div  className="div--fillWidth div--flexCentreColumn">
			<div style={style} className="div--flexCentreColumn">
				<ParticularsField label="User Name" type="input"/>
				<ParticularsField label="Email" type="input"/>
				<ParticularsField label="Password" type="password"/>
				<ParticularsField label="ConfirmPassword" type="password"/>
				<CustomButton label="Register">asdf</CustomButton>
			</div>
		</div>
	)
}
