const EventHandling = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered !", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h1>EventHandling</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default EventHandling;
