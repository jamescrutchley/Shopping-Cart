import { render, fireEvent } from './setup.jsx';
import {About} from '../components/About.jsx'

describe("Header", () => {
    it("should render the header component", () => {
        render(<About />);
        screen.debug();
    });
})
