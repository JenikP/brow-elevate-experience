const ThreadingInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">
            What is Eyebrow Threading?
          </h2>
          <p className="text-lg text-warmGray leading-relaxed">
            Threading is an ancient method of hair removal originating in Central Asia and India. 
            Eyebrows threading technique is used to remove hair using twisted piece of cotton thread. 
            We use only Organic Cotton for sensitive skin.
          </p>
          <div className="mt-12">
            <img 
              src="https://media.istockphoto.com/photos/eyebrow-threading-epilation-procedure-for-brow-shape-correction-picture-id1189794702?k=20&m=1189794702&s=612x612&w=0&h=1xl8fgpCkMk88SVyfPgdOJRtG23yCjFNXHl8fayi7Ys=" 
              alt="Eyebrow Threading Demonstration" 
              className="rounded-xl shadow-lg mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreadingInfo;
