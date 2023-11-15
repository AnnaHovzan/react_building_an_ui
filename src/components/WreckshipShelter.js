import React from "react";

const Card = (props) => {
  const name = props.name;
  const age = props.age;
  const imageName = name.toLowerCase();
  const imageUrl = `./assets/${imageName}.jpg`; 
  console.log(imageUrl)

  return (
    <>
      <div className="cardsContainer">
        <div className="card">
          <img src={imageUrl} alt={imageName} />
          <h4>{name}</h4>
          <p>
            {name} is a really beautiful animal, with a lot of sass and snuggles
            to give,who is {age} years old and is looking for a nap companion
            during those tough winter months. Very self sufficient, and is able
            to find a snack wherever he goes. No food at hand? Not a problem,
            our pet will figure out how to open your trash and invite himself to
            the delicious leftovers of that dinner you never finished! And if
            something falls on the floor, it will be gone before you can count
            to three! Take him back home with you!
          </p>
        </div>
      </div>
    </>
  );
};

const Cats = ({ cats, age }) => {
  return (
    <>
      <section className="animalContainer">
        <h3>Adopt a Cat!</h3>
        {cats.map((cat, index) => (
          <Card key={index} name={cat} age={age()} />
        ))}
      </section>
    </>
  );
};

const Dogs = ({ dogs, age }) => {
  return (
    <>
      <section className="animalContainer">
        <h3>Adopt a Dog!</h3>
        {dogs.map((dog, index) => (
          <Card key={index} name={dog} age={age()} />
        ))}
      </section>
    </>
  );
};

const Form = () => {
  return (
    <>
      <section className="formContainer">
        <h2>Do you want to adopt?</h2>
        <form className="form">
          <div>
            <label>Your Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label>Pet</label>
            <input type="text" name="pet" id="pet" placeholder="Pet's name" />
          </div>
          <div className="textarea">
            <label>Who are you?</label>
            <textarea
              type="text"
              name="animal-name"
              id="animal-name"
              placeholder="Let us know a bit about yourself and your situation,
                and we will get back to you as soon as possible to start the
                adoption process!"
              rows="7"
              cols="50"
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

const WreckshipShelter = ({ cats, dogs, age }) => {
  return (
    <div className="block">
      <h2>Wreckship Shelter</h2>
      <p>
        In our beautiful shelter we have lots of animals with quirky qualities
        to them. Are you in search of a challenge? Here you can find the perfect
        animal for you!
      </p>

      <Cats cats={cats} age={age}/>
      <Dogs dogs={dogs} age={age}/>
      <Form />
    </div>
  );
};

export default WreckshipShelter;
