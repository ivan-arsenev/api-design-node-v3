import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

export default crudControllers(Item)

// const run = async () => {
//   await connect('mongodb://localhost:27017/api-design-test')

//   const item = await Item.create({
//     name: 'Clean up',
//     createdBy: mongoose.Types.ObjectId(),
//     list: mongoose.Types.ObjectId()
//   })

//   const updated = await Item.findByIdAndUpdate(
//     item._id,
//     { name: 'eat' },
//     { new: true }
//   ).exec()

//   console.log(updated)

//   // console.log(await Item.findById(item._id).exec())
// }
// run()
