import { data } from "../data.js";

const createUser = async (req, res) => {

    const { username, email, age, hobbies, address } = req.body


    if (!username || !email || !age || !hobbies || !address)
        return res.send('fill all the details')


    const user = {
        username: username,
        email: email,
        age: age,
        hobbies: hobbies,
        address: address

    }
    data.push(user)
    res.json({ message: 'user added successfully', data });
}

const getUser = async (req, res) => {
    const { email } = req.body

    if (!email)
        return res.json({ message: 'please enter your email id' })
    const user = await data.find(db => db.email === email)

    if (!user)
        return res.json({ message: 'user not found' })
    return res.json({ message: 'user found successfully', user })

}

const updateUser = async (req, res) => {
    const { email, username, age } = req.body

    if (!email)
        return res.json({ message: 'please enter your email id' })

    const user = await data.find(db => db.email === email)

    if (!user)
        return res.json({ message: 'user not found' })

    user.username = username
    user.age = age

    return res.json({ message: 'data updated successfully', user })
}

const deleteUser = async (req, res) => {
    const { email } = req.body

    if (!email)
        return res.json({ message: 'please enter your email id' })
    const users = data.filter(db => db.email !== email)

    return res.json({ message: 'user deleted Successfully', users })
}
export { createUser, getUser, updateUser,deleteUser }