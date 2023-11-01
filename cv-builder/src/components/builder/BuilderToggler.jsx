export default function BuilderToggler({ toggle, onChange, checked }) {

    return (
        <div className="toggle-slider">
            <input
                type="checkbox"
                id={toggle}
                onChange={onChange}
                checked={checked}

            />
            <label htmlFor={toggle} className="slider" />
        </div>
    )
}