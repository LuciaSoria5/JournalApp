import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const JournalApp = () => {
  return (
    // aplicamos el theme a nuestra app
    <AppTheme> 
        <AppRouter />
    </AppTheme>
  )
}
