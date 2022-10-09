Ejercicio take home

Instruccion: 
El proyecto contiene dos carpetas: api, donde está todo el back y base de datos y client, donde está el front.
Para correr el proyecto de manera local npm install y npm start

Realiza las siguientes consignas en la medida de lo posible. Lo que queremos evaluar es la calidad y limpieza del código así como la compresión a las indicaciones. El resultado correcto es solo parte de lo que nos interesa.

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

Detalles de la entrega
1.	Sube tu código a un repo github.
2.	Compárteme tu repo y un video demo 
