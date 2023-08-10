const MsgError = ( { children } ) => {
  return (
    <div className="bg-red-300 text-center p-2 mb-5 text-red-950 rounded-md">
      <p>{children}</p>
    </div>
  );
}

export default MsgError;
