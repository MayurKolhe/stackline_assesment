import { configureStore }  from "@reduxjs/toolkit"
import reducer from './salesSlice'

export default configureStore({
  reducer: {
    reducer
  },
})
