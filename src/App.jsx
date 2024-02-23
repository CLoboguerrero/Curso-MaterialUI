//Importar un Button en mayúsculas, en automático está referenciando a un estilo de materialUI
// Si se importa el botón como "@mui/material/Button", según el elemento cargaría mas rápido en fase de desarrollo
import { Button } from "@mui/material"


function App() {

  return (
    <div>
      <h1>App</h1>
      <Button variant="contained">Mi primer botón</Button>
    </div>
  )
}

export default App
