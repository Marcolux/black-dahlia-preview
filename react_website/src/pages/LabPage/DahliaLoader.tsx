import MandalaDahlia from "../../components/Mandala/MandalaDahlia"

const DahliaLoader = () => {
    return(
        <div 
            className="flex flex-alignItems-center flex-justifyContent-center"
            style={{
                background: "radial-gradient(rgb(0 0 0 / 43%) 0%, #272626 70%, #ffffff20 100%)", 
                borderRadius: "50%", 
                padding: "20px",

            }}
        >
            <MandalaDahlia 
                size={200} 
                animation="wave" 
                className="DahliaLoader"
                petals={[ 
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(234 223 217 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(58 76 151 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,    
                        fill: 'rgba(223 155 87 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(190 80 143 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(234 223 217 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(58 76 151 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,    
                        fill: 'rgba(223 155 87 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(190 80 143 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(234 223 217 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(58 76 151 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,    
                        fill: 'rgba(223 155 87 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(190 80 143 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(234 223 217 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(58 76 151 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,    
                        fill: 'rgba(223 155 87 / 0.7)' 
                    },
                    { 
                        color: '#000',
                        width: 0.3,
                        fill: 'rgba(190 80 143 / 0.7)' 
                    },
                ]} 
            />
        </div>
    )
}
export default DahliaLoader