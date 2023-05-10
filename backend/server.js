const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({dest:'upload/'})

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

//mongo db connection
const uri = process.env.ATLAS_URI;
mongoose.connect (uri, { useNewUrlParser : true, useUnifiedTopology : true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo DB connection established successfully");
})

const employeeRouter = require('./routes/employee');

const customerRouter = require('./routes/customer');

const OrderRouter = require('./routes/order');
const InventoryRouter = require('./routes/inventory');
const InventoryOrdersRouter = require('./routes/inventoryOrders');
const ProductRouter = require('./routes/product');
const DeliveryRouter = require('./routes/delivery');
const SalaryRouter = require('./routes/salary');
const UserRouter = require('./routes/user');

const SupplierRouter = require('./routes/supplier');
const GreenHouseRouter = require('./routes/greenHouse');


app.use('/employee', employeeRouter);

app.use('/customer', customerRouter);

app.use('/order', OrderRouter);
app.use('/inventory', InventoryRouter);
app.use('/inventoryOrders', InventoryOrdersRouter);
app.use('/product', ProductRouter);
app.use('/delivery', DeliveryRouter);
app.use('/salary', SalaryRouter);
app.use('/user', UserRouter);


app.use('/supplier',SupplierRouter);
app.use('/greenHouse',GreenHouseRouter);

app.listen(port, () => {
    console.log(`Server is running on port:-${port}`);
});