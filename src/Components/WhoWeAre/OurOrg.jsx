import React from 'react'

const OurOrg = () => {
  return (
    <section className="absolute">
      <section className="absolute top-[2146px] left-[105px] w-[1339px] h-[641.26px] text-29xl text-stroke-green-color">
        <section className="absolute top-[0px] left-[349px] w-[604px] h-[100px]">
          <section className="absolute top-[0px] left-[0px] w-[604px] h-[100px]">
            <section className="absolute top-[0px] left-[301.32px] rounded-sm bg-beige w-[302.68px] h-[100px]" />
            <section className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[302.68px] h-[100px]" />
          </section>
          <h1
            className="m-0 absolute top-[18px] left-[calc(50%_-_252px)] text-inherit tracking-[0.53em] leading-[133%] font-semibold font-inherit"
            id="who_we_are"
          >
            Who we are
          </h1>
        </section>
        <p
          className="m-0 absolute top-[320px] left-[calc(50%_+_45.5px)] text-5xl tracking-[0.05em] leading-[156.23%] text-black inline-block w-[624px]"
          id="whoWeAre"
        >
          <span className="font-semibold">Stay</span>
          <i className="font-semibold">FIT</i>
          <span>
            {" "}
            is a team of dedicated nutritionists, fitness experts, and
            technology enthusiasts who believe that optimal health is attainable
            for everyone. We blend the latest scientific research with
            practical, user-friendly technology to create a seamless and
            rewarding experience for our users.
          </span>
        </p>
        <img
          className="absolute top-[220px] left-[0px] w-[586px] h-[421.26px] object-cover"
          alt="Whoweare"
          src="/rectangle-512@2x.png"
        />
      </section>
    </section>
  )
}

export default OurOrg
