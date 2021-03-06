let tvs;    // List of movies from TMDB Api

// Utility functions
const filterByTitle = (tvList, string) =>
  tvList.filter((m) => m.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
  tvList.filter((m) => m.genre_ids.includes(genreId));

describe("Tv Page ", () => {
  before(() => {
    // Get tv shows from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        tvs = response.results
      })
  })

  beforeEach(() => {
    cy.visit("/tv/discovertv")
  });

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h3").contains("Discover Tv Shows");
      cy.get("h1").contains("Filter the Tv Shows");
    });
});

  describe("Filtering", () => {
    describe("By tv title", () => {
     it("should only display tv shows with a in the title", () => {
       let searchString = "a";
       let matchingTvs = filterByTitle(tvs, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter a in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingTvs.length
       );
   
     })
     it("should only display movies with t in the title", () => {
       let searchString = "t";
       let matchingTvs = filterByTitle(tvs, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter t in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingTvs.length
       );
       });
 
     it("should only display movies with xyz in the title", () => {
        let searchString = "xyz";
        let matchingTvs = filterByTitle(tvs, searchString);
        cy.get("#filled-search").clear().type(searchString); // Enter xyz in text box
        cy.get(".MuiCardHeader-content").should("have.length", 0,matchingTvs);

     });
      });
      describe("By tv genre", () => {
        it("should display tv shows with the specified genre only", () => {
           const selectedGenreId = 80;
           const selectedGenreText = "Crime";
           const matchingTvs = filterByGenre(tvs, selectedGenreId);
           cy.get("#genre-select").click();
           cy.get("li").contains(selectedGenreText).click();
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingTvs.length
           );
         
        });
         describe("By tv title and genre", () => {
            it("should only display tv with the specified title in a genre", () => {
              let searchString = "Money Heist";
              const selectedGenreText = "Crime";

              cy.get("#genre-select").click();
            cy.get("li").contains(selectedGenreText).click();
              cy.get("#filled-search").clear().type(searchString); 
           
            });
        });
});
  });
});

