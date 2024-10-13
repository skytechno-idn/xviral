import vine from '@vinejs/vine'

export const createAuthValidator = vine.compile(
  vine.object({
    email: vine.string().trim().minLength(6).email(),
    password: vine.string().trim().minLength(8),
  })
)
