import { createBook, createBookManager, Book } from "../challenge2";

describe("createBook function", () => {
  it("should create a Book with the correct structure", () => {
    const details = { year: 2021, genre: "Non-Fiction" };
    const book: Book<typeof details> = createBook("Test Book", "Test Author", details);
    expect(book).toHaveProperty("title", "Test Book");
    expect(book).toHaveProperty("author", "Test Author");
    expect(book).toHaveProperty("extraDetails", details);
  });
});

describe("createBookManager", () => {
  let manager: ReturnType<typeof createBookManager>;
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    manager = createBookManager<{ year: number; genre?: string }>();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  describe("addBook", () => {
    it("should add a book and log the correct message", () => {
      const details = { year: 2000, genre: "Sci-fi" };
      manager.addBook("Dune", "Frank Herbert", details);
      expect(consoleLogSpy).toHaveBeenCalledWith("Added: Dune");

      const results = manager.searchBooks("Dune");
      expect(results.length).toBe(1);
      expect(results[0].title).toBe("Dune");
    });
  });

  describe("searchBooks", () => {
    beforeEach(() => {
      manager.addBook("The Hobbit", "J.R.R. Tolkien", { year: 1937 });
      manager.addBook("The Lord of the Rings", "J.R.R. Tolkien", {
        year: 1954,
      });
      manager.addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", {
        year: 1997,
      });
    });

    it("should return books that match the query (case-insensitive)", () => {
      const results = manager.searchBooks("the");
      expect(results.length).toBe(3);
      const titles = results.map((book) => book.title);
      expect(titles).toEqual(expect.arrayContaining(["The Hobbit", "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone"]));
    });

    it("should return an empty array if no books match the query", () => {
      const results = manager.searchBooks("Nonexistent");
      expect(results.length).toBe(0);
    });
  });

  describe("countBooks", () => {
    it("should count the correct number of books asynchronously", async () => {
      manager.addBook("Book One", "Author One", { year: 2001 });
      manager.addBook("Book Two", "Author Two", { year: 2002 });
      const count = await manager.countBooks();
      expect(count).toBe(2);
    });
  });
});
