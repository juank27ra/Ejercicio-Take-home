Ejercicio take home

Instruccion: 
El proyecto contiene dos carpetas: api, donde está todo el back y base de datos hecha con MongoDb y client, donde está el front.
Para correr el proyecto de manera local npm install y npm start


1 - Backend
1.	Realiza un backend con dos endpoints.

a.	El primero, que reciba un archivo con las siguientes columnas: id, sku, cantidad. Con base en estas columnas el backend crea una orden en una base de datos no relacional.
i.	Debemos poder enviar órdenes con multilínea, es decir, un mismo id con diferentes skus.

b.	El segundo, que nos permita retribuir las órdenes creadas.

Ejemplo
Input: = entrada 
Id	Sku	Cantidad
1	A	1
1	B	2
2	A	2

//-----------------
output: = Salida 
<Base de datos>

-	id: 1
    -	products
    -	sku: A
    -	quantity: 1
    -	sku: B
    -	quantity: 2

-	id: 2
    -	products
    -	sku: A
    -	quantity: 2
	
//-----------------


2 - Frontend
    Realiza un front sencillo que permita cargar este archivo y ver las órdenes creadas anteriormente.

![1](https://user-images.githubusercontent.com/96093773/196079149-0dae3a1b-d5ee-439c-a608-47f0d81366b4.jpg)
![2](https://user-images.githubusercontent.com/96093773/196079148-c9b3acd0-68f5-45e6-92fd-a8b2ffa47084.jpg)

