import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // ✅ Must import this for `toBeInTheDocument`
import HelloWorld from '../components/testComponents/HelloWorld';

test("render hello world text", () => {
    const { getByText } = render(<HelloWorld />);
    const checkHelloWorldText = getByText("Hello world");
    expect(checkHelloWorldText).toBeInTheDocument();
});
