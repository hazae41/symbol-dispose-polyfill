import { assert, test } from "@hazae41/phobos";
import "./polyfill.js";

class SyncObject {

  disposed = false;

  [Symbol.dispose]() {
    this.disposed = true
  }

}

test("sync", async ({ message, test }) => {
  const obj = new SyncObject()

  {
    using _ = obj
  }

  assert(obj.disposed)
})

class AsyncObject {

  disposed = false;

  async [Symbol.asyncDispose]() {
    this.disposed = true
  }

}

test("async", async ({ message, test }) => {
  const obj = new AsyncObject()

  {
    await using _ = obj
  }

  assert(obj.disposed)
})

