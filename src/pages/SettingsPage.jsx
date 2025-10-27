export default function SettingsPage() 
{
    return (
        <div>
            <h1>Settings</h1>

            <form>
                <div>
                    <label>Cantidad de fichas</label>
                    <input type="number" />
                </div>

                <div>
                    <button>Guardar</button>
                </div>
            </form>
        </div>
    )
}
