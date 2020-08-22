enum statusEnum {
  NOT_STARTED = 0,
  SCRAMBLING = 1,
  VERIFYING = 2,
  SOLVED = 3
}

export default {
  id: {
    resolver: async (context, req, currentObject, query, args) => {
      return args.id;
    }
  },
  name: {
    resolver: async (context, req, currentObject, query, args) => {
      return statusEnum[args.id]
    }
  }
}