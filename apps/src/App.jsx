import Chatbox from './Chatbox'
import WebcamContainer from './WebcamContainer'
import BoxContainer from './BoxContainer'
import ColorRectangles from './ColorRectangle'

const App = () => {
	const colors = ['#2A2C9B', '#F08A7D', '#8E5DB2', '#E8A1A3', '#4D3B9E', '#7F3C8F', '#B57AB3']

	return (
		<div id="content-container">
			<WebcamContainer />
			<Chatbox />
			<BoxContainer>
				<ColorRectangles colors={colors} />
			</BoxContainer>
		</div>
	)
}

export default App
