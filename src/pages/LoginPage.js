import ParticularsField from '../CommonComponents/ParticularsField';
import CustomButton from '../CommonComponents/CustomButton';

export default function LoginPage(){
	const style = {
		width: '20em'
	};
	
	return(
		<div  className="div--fillWidth div--flexCentreColumn">
			<div style={style} className="div--flexCentreColumn">
				<ParticularsField label="Email" type="input"/>
				<ParticularsField label="Password" type="password"/>
				<CustomButton label="Sign In"></CustomButton>
			</div>
		</div>
	)
}
