import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const title = 'Home page';
    //const [name, setName] = useState('mario');

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    //const handleClick = () => {
    //    setName(name === 'mario' ? 'Agustin' : 'mario');
    //}
    //const handleClickParameters = (name) => {
    //    alert(`Hello ${name}`);
    //}

    return (
        <div className="home">
            <h2>{title}</h2>
            {/*<p>{name}</p>
            <button onClick={handleClick}>Change name</button>
            <button onClick={() => handleClickParameters('Agustin')}>Click me with parameters</button>
            <br />*/}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs' />}
            {/*BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title='Marios blogs' />*/}
        </div>
    );
}

export default Home;