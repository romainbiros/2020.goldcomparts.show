<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`artists/${params.slug}.json`);
    const artist = await res.json();

    return { artist };
  }
</script>

<script>
  import { slugify } from "../../js/helpers.js";
  import SocialLink from "../../components/SocialLink.svelte";

  export let artist;
</script>

<style>
  /*.content {*/
    /*display: grid;*/
    /*justify-content: center;*/
    /*grid-template-columns: 400px auto;*/
    /*grid-template-rows: 50px 400px 10px;*/
    /*grid-template-areas: "img name" "img bio" "links bio";*/
  /*}*/


  .bio-photo {
    width: 100%;
    padding-bottom: 100%;
    height: 0px;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
    background-color: #A6A8AB;
  }

  h3{
    margin-top:.6666em;
  }

  a{
    color:#387194;
  }

  .artists-section{
    min-height: 100vh;
  }

  .content ul {
     list-style: none; 
     margin-left: 0em;
  }

  .align-center {
      text-align: center;
      max-width: 80%;
    }
/*  .artist-bio {
    padding-top: 50px;
    grid-area: bio;
    padding-left: 10px;
  }

  .social-links {
    grid-area: links;
    display: flex;
    flex-direction: column;
  }

/*  .artist-name {
    grid-area: name;
    padding-left: 10px;
  }*/

  @media screen and (max-width: 768px) {
/*    .content {
      display: grid;
      grid-template-columns: 400px;
      grid-template-rows: 400px 50px auto;
      grid-template-areas: "img" "name" "bio" "links";
    }*/


    h2{
      margin-top:.5714em;
    }

    .social-links {
      padding-top: 25px;
    }

    .see-more{
      text-align: center;
      max-width: 80%;
    }
  }
</style>

<svelte:head>
  <title>{artist.name} - Final Show - 2020</title>
</svelte:head>

<div class="container is-desktop bg-col-3">
  <div style="
    width: 100%;
    height: 350px;
    margin: auto;
  ">
  </div>
</div>

<section class="section bg-col-7">
    <div class="content">
      <section class="section bg-col-7">
        <div class="container is-widescreen align-center">
          <h2>#insert artwork title#</h2>
          <h3>
            {artist.name}
            {#if artist.otherName}({artist.otherName}){/if}
          </h3>
          <p>#insert artwork description#</p>
          <h3>How to interact</h3>
          <p>#insert interaction instructions#</p>
          <a href="" class="rounded-link col-7 bg-col-1">See the work</a>
          <br>
          <div>#images/video carousel#</div>
        </div>
      </section>

      <section class="section bg-col-2 col-6">
        <div class="container is-widescreen see-more">
          <h2>Want to see more?</h2>
          <div class="columns">
              <div class="column">
                <p>LIVE ONLINE</p>
                <p>#insert timeslot a#</p>
                <p>#insert timeslot b#</p>
                <div>
                  <a href="" class="rounded-link bg-col-7">Watch Live</a>
                  <a href="../schedule" class="rounded-link bg-col-7">Full Schedule</a>
                </div>
              </div>
              <div class="column">
                <p>ON SITE</p>
                <p>Goldsmiths, University of London</p>
                <p>St James Hatcham Building</p>
                <div>
                  <a href="../getting-there" class="rounded-link bg-col-7">Getting There</a>
                  <a href="" class="rounded-link bg-col-7">Map</a>
                </div>
              </div>
          </div>    
        </div>
      </section>
    </div>
</section>


<section class="section bg-col-7 artists-section">
  <div class="container is-widescreen">

    <div class="content">

    
      <div class="columns">
      <div class="column is-one-third">

        <div
          class="bio-photo"
          style="background-image:url(img/bios/{artist.username}.jpeg)">
        </div>


        <!-- TODO not an ideal setup to be show / hiding bio on mobile versus desktop... to be resolved in the next iteration with artist work-->
        <div class="is-hidden-desktop is-hidden-tablet">
          <h2 class="artist-name">
            {artist.name}
            {#if artist.otherName}({artist.otherName}){/if}
          </h2>

          <div class="artist-bio">
            {#if artist.bioHTML}
              {@html artist.bioHTML}
            {:else}
              <p>No biography provided</p>
            {/if}
          </div>
        </div>

        <div class="social-links">
          <h3>Social links</h3>
          <SocialLink kind="website" value={artist.website} />
          <SocialLink kind="instagram" value={artist.instagram} />
          <SocialLink kind="twitter" value={artist.twitter} />
          <SocialLink kind="facebook" value={artist.facebook} />
          <SocialLink kind="vimeo" value={artist.vimeo} />
          <SocialLink kind="youtube" value={artist.youtube} />
          <SocialLink kind="twitch" value={artist.twitch} />
        </div>


        <!-- TODO these don't seem to be implemented yet, leading to 404 errors so just editing out for now-->
<!--         {#if artist.events.length}
          <div class="event-schedule">
            <h3>Event schedule</h3>
            <ul>
              {#each artist.events as event}
                <li>
                  <a href="/schedule/TODO">{event.title}</a>
                  - {event.startTime}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
 -->
      </div>
      <div class="column is-hidden-mobile is-two-thirds">
            <h2 class="artist-name">
              {artist.name}
              {#if artist.otherName}({artist.otherName}){/if}
            </h2>

            <div class="artist-bio">
              {#if artist.bioHTML}
                {@html artist.bioHTML}
              {:else}
                <p>No biography provided</p>
              {/if}
            </div>
      </div>
    </div>
  </div>
  <div style="padding-top: 100px;" />
</section>
