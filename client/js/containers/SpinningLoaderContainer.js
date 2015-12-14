import { connect } from "react-redux"
import SpinningLoader from "../components/SpinningLoader"

export default connect (state => ({ loaded: state.root.loaded })) (SpinningLoader)
