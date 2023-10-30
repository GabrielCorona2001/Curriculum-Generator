import "../../styles/infos.css";


export default function ContactInfo() {

    return (

        <div>
            <h2>Informações de contato</h2>

            <form className="form-info">
                <span>Email:</span>
                <input type="text" />
                <span>Número de telefone:</span>
                <input type="text" />
                <span>Localização:</span>
                <input type="text" />
            </form>

        </div>
    )
}