export default function ParticularsField(prop){
	const style={
		textAlign: "center"
	};
	 
	return(
		<div  className="div--flexCentreColumn">
			<div style={style} className="">{prop.label}</div>
			<input style={style} type={prop.type} className=""/>
		</div>
	)
}
