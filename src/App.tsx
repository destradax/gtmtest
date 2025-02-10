import { FormEventHandler } from 'react';
import './App.css';

function App() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    for (const key of formData.keys()) {
      console.log(`[${key}]: ${formData.get(key)}`);
    }
  };

  return (
    <>
      <h1>GTM Tests</h1>
      <div className="twoColumns">
        <fieldset>
          <legend>Simple Form</legend>

          <form onSubmit={handleSubmit} className="form">
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Email <input type="email" name="email" />
            </label>
            <label>
              <input type="checkbox" name="acceptTOS" required />I accept the terms of service
            </label>
            <button type="submit">Send</button>
          </form>
        </fieldset>

        <div className="lorem">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et purus nec eros scelerisque maximus quis a
            magna. Sed finibus nisl nec nisl ultricies, ac mollis tortor imperdiet. Vivamus porta porttitor eros, at
            hendrerit orci luctus vel. Fusce nec ex non elit sodales rutrum nec sed justo. Nullam eget elit mi. Aenean
            pulvinar ultricies lectus vitae interdum. Phasellus a nulla mi. Fusce vel consequat tellus. Curabitur
            vehicula turpis ac magna pharetra tempus. Etiam vulputate ante vitae mi dictum viverra. In pretium leo et
            nulla dignissim tristique. Nulla vehicula sed odio sed pharetra. Morbi est tellus, facilisis at finibus a,
            suscipit sed massa. Curabitur lacinia augue non dapibus commodo. Morbi efficitur magna nec suscipit tempor.
          </p>

          <p>
            Maecenas quis nisi porta, malesuada ligula nec, consectetur lectus. Cras posuere risus erat. Aenean at felis
            eget tellus aliquam pulvinar in ut massa. Sed facilisis tortor ac diam laoreet, id convallis dui auctor.
            Etiam malesuada mi eu lacus ultricies fringilla. Ut elementum, urna non egestas dapibus, neque leo semper
            ligula, vitae faucibus massa enim vitae nibh. In consequat semper sodales.
          </p>

          <p>
            Nam posuere ac justo quis auctor. Duis porta, urna eget dapibus fermentum, turpis elit luctus magna, id
            facilisis lectus lorem sed nunc. Suspendisse nec mollis mauris. Mauris quis molestie risus. Maecenas vitae
            sem pellentesque, posuere felis ut, volutpat urna. Fusce ut nunc porta elit gravida congue. Quisque viverra
            vulputate augue nec condimentum. Fusce erat purus, viverra placerat diam eu, facilisis interdum enim.
            Vestibulum ex elit, tempor quis rhoncus a, congue non arcu. Integer sed lobortis massa. Mauris sed ligula
            purus. Vivamus egestas volutpat metus. Quisque interdum convallis venenatis. Nunc eget malesuada diam.
            Vivamus vulputate id ante laoreet faucibus. Suspendisse ullamcorper condimentum mi, sit amet mollis nibh
            tempus feugiat.
          </p>

          <p>
            Aenean ultrices ex in elit accumsan, sit amet tempus tellus rhoncus. Suspendisse interdum vitae quam nec
            mollis. Vestibulum lobortis lacus nec fringilla convallis. Integer gravida massa vitae augue imperdiet,
            vitae faucibus nulla pellentesque. Vestibulum hendrerit scelerisque luctus. Maecenas convallis tellus a
            blandit feugiat. Duis finibus, eros vitae egestas egestas, justo leo elementum ante, ac luctus erat augue
            eget diam. Donec tempus quam quis urna iaculis ultrices. Nam viverra urna non finibus placerat. Vivamus et
            dui est. Vestibulum sed convallis augue.
          </p>

          <p>
            Etiam porttitor elementum placerat. Vestibulum iaculis egestas orci ut sagittis. Nam in pellentesque elit,
            et congue odio. Suspendisse iaculis nisi tincidunt nisl vulputate dapibus. Nullam mollis condimentum velit.
            In a urna turpis. Pellentesque fringilla tincidunt interdum. Nunc feugiat elementum tincidunt.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
