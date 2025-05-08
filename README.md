# 🏡 HomePower - CRUD de Productos

Bienvenido al repositorio de **HomePower**, una API desarrollada en **Node.js** y **TypeScript** para gestionar productos de forma sencilla. Este proyecto incluye funcionalidades básicas de un CRUD, donde puedes crear, leer, actualizar y eliminar productos.

---

## 📦 Requisitos

* Node.js `>= 18.x`
* NPM `>= 10.x`
* Docker y Docker Compose
* Terraform `>= 1.x`

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/homepower-crud.git
cd homepower-crud
```

2. Instala las dependencias:

```bash
npm install
```

---

## 🐳 Levantar la Base de Datos con Docker Compose

Este proyecto utiliza **Docker Compose** para levantar los servicios necesarios, incluyendo la base de datos.

1. Asegúrate de tener **Docker** y **Docker Compose** instalados en tu máquina.

2. Levanta los servicios con Docker Compose:

```bash
docker-compose up -d
```

3. Verifica que los servicios están corriendo:

```bash
docker ps
```

---

## ⚙️ Configuración del Entorno

1. Crea un archivo `.env` basado en el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Configura las variables de entorno según tus necesidades, como la conexión a la base de datos y otras configuraciones locales.

---

## 💡 Correr en Modo Desarrollo

Con la base de datos levantada y las variables de entorno configuradas, ejecuta el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor estará disponible en:

```
http://localhost:3000
```

---

## 🧑‍💻 Endpoints de la API

Este proyecto implementa un CRUD básico para gestionar productos. A continuación se detallan los principales endpoints disponibles:

1. **Crear un producto**:

```http
POST /products
```

2. **Obtener todos los productos**:

```http
GET /products
```

3. **Obtener un producto por ID**:

```http
GET /products/:id
```

4. **Actualizar un producto**:

```http
PUT /products/:id
```

5. **Eliminar un producto**:

```http
DELETE /products/:id
```

---

## 🦾 Ejecución de Tests

El proyecto incluye pruebas automatizadas usando **Jest**. Para ejecutarlas, simplemente corre:

```bash
npm run test
```

---

## 🛠️ Terraform - Infraestructura

Este proyecto también utiliza **Terraform** para gestionar la infraestructura en AWS. Los pasos para configurar y desplegar la infraestructura son los siguientes:

1. **Inicializar Terraform**:

```bash
terraform init
```

2. **Verificar los cambios a aplicar**:

```bash
terraform plan
```

3. **Aplicar los cambios en la infraestructura**:

```bash
terraform apply -auto-approve
```

### Infraestructura Desplegada

* **Base de datos en AWS RDS**: Se utiliza **PostgreSQL** como base de datos.
* **API Gateway**: Exposición de los endpoints de la API.
* **Instancia EC2 (opcional)**: Si se utiliza para despliegue de la API.
* **Red VPC**: Configuración de red privada para asegurar que los servicios estén dentro de una red segura.

---

## 🔧 Estructura del Proyecto

La estructura del proyecto sigue las mejores prácticas para organizar los componentes del sistema:

```
src/
├── common/                    # Componentes reutilizables y globales
│   ├── exceptions/            # Manejo de excepciones globales
│   └── filters/               # Filtros y middlewares
│
├── config/                    # Archivos de configuración del proyecto
│   └── config.ts              # Configuración centralizada, variables de entorno, etc.
│
├── migrations/                # Migraciones de la base de datos
│   └── 202309120101_init.ts   # Ejemplo de migración
│
├── postmans/                  # Colección de Postman para pruebas
│   └── api-collection.json    # Archivo de la colección de Postman
│
├── productos/                 # Dominio relacionado con los productos
│   ├── aplicaciones/          # Casos de uso de la lógica de negocio
│   │   └── create-product.ts  # Caso de uso para crear un producto
│   │   └── update-product.ts  # Caso de uso para actualizar un producto
│   ├── domain/                # Entidades y lógica del dominio de productos
│   │   ├── entities/          # Entidades del dominio
│   │   │   └── product.ts     # Definición de la entidad Producto
│   │   └── repositories/      # Repositorios para acceder a los datos
│   │       └── product.repo.ts # Repositorio de productos
│   ├── dto/                   # Data Transfer Objects (DTO) de productos
│   │   └── product.dto.ts     # DTO para la creación y actualización de productos
│   └── infrastructure/        # Implementación de infraestructura relacionada con productos
│       ├── controllers/       # Controladores para manejar las rutas HTTP
│       │   └── product.controller.ts # Controlador para la API de productos
│       └── repositories/      # Implementación de repositorios
│           └── product.repo.ts  # Implementación del repositorio de productos
│
└── utils/                     # Utilidades generales
    └── logger.ts              # Funciones de logging para la aplicación
```

---

## ⚙️ CI/CD con GitHub Actions

Este proyecto incluye un flujo de trabajo automatizado mediante **GitHub Actions** para asegurar la calidad y consistencia del código. Los pasos principales incluyen:

1. **Validación del título del PR**: Se valida que el título del PR siga la convención `feat:`, `fix:`, `chore:`, etc.
2. **Ejecución de Pruebas**: Se ejecutan las pruebas automatizadas para asegurar que todo funcione correctamente.
3. **Despliegue de Infraestructura con Terraform**: Si se hace un `push` a la rama `main`, se despliega la infraestructura utilizando Terraform.

---

¡Perfecto! Vamos a agregar la sección relacionada con el despliegue en AWS y manejo de secretos a tu README. Aquí tienes cómo quedaría esa sección con base en tu experiencia:

---

## 🌐 Despliegue en AWS

### Desplegar la API en **AWS ECS** + **RDS**

Con base en mi experiencia, recomendaría desplegar esta API utilizando **AWS App Runner** para simplificar el proceso de despliegue y escalabilidad. **App Runner** es un servicio completamente gestionado por AWS que permite desplegar aplicaciones de manera rápida y eficiente sin tener que gestionar la infraestructura subyacente. A continuación, describo cómo lo haría:

1. **Configuración de la aplicación en AWS App Runner:**

   * Crear una imagen Docker de la API y subirla a **Amazon ECR** (Elastic Container Registry).
   * Configurar AWS App Runner para que tome esta imagen y la despliegue automáticamente.
   * Durante la configuración de App Runner, se pueden definir variables de entorno (como credenciales de acceso a RDS o configuraciones específicas) que serán utilizadas por la aplicación durante la ejecución.
   * App Runner también puede escalar automáticamente la aplicación según la demanda, lo que hace que el proceso de escalabilidad sea mucho más sencillo.

2. **Base de Datos con AWS RDS:**

   * Crear una instancia de **RDS** para manejar la base de datos de la aplicación.
   * Configurar el RDS para que esté accesible solo desde la red privada de la aplicación (en caso de que esté usando ECS o App Runner), asegurando que la base de datos no sea accesible públicamente.
   * Definir las variables de conexión a la base de datos (como el nombre de la base de datos, el usuario y la contraseña) dentro de **AWS Secrets Manager**, y luego hacer que App Runner las lea durante el inicio de la aplicación.

### Manejo de Secretos con **AWS Secrets Manager**

Para manejar los secretos de manera segura (como credenciales de base de datos, API keys, etc.), AWS **Secrets Manager** es una excelente opción. Aquí se almacenan de manera segura las credenciales y otros datos sensibles, y se puede acceder a ellos de manera controlada y auditada.

1. **Creación de secretos:**

   * Los secretos pueden ser creados dentro de AWS Secrets Manager, incluyendo claves de acceso para la base de datos RDS y cualquier otra configuración sensible.

2. **Acceso desde la aplicación:**

   * La aplicación puede recuperar los secretos de AWS Secrets Manager utilizando el SDK de AWS para Node.js (por ejemplo, `aws-sdk`).
   * Al utilizar **AWS App Runner**, podemos integrar directamente Secrets Manager con las variables de entorno de la aplicación, de modo que no tengamos que exponer las credenciales en el código fuente o en archivos de configuración.

3. **Automatización con GitHub Actions:**

   * A través de **GitHub Actions**, podemos automatizar el despliegue, incluyendo la actualización de los secretos y las variables de entorno desde AWS Secrets Manager durante el despliegue de la aplicación.

### Uso de **Terraform** para Crear RDS y Secret Manager

Opcionalmente, podemos utilizar **Terraform** para automatizar la infraestructura en AWS, creando la base de datos RDS y configurando el Secrets Manager, lo que nos permite gestionar nuestra infraestructura como código.

A continuación se muestra un pequeño ejemplo de Terraform que crea un RDS y un Secret Manager con las variables necesarias para la conexión a la base de datos.

```hcl
# Terraform Configuration to Create AWS RDS and Secrets Manager

provider "aws" {
  region = "us-east-1"
}

# Crear un Secret para almacenar credenciales de la base de datos
resource "aws_secretsmanager_secret" "db_credentials" {
  name        = "db_credentials"
  description = "Database credentials for HomePower API"
}

resource "aws_secretsmanager_secret_version" "db_credentials_version" {
  secret_id     = aws_secretsmanager_secret.db_credentials.id
  secret_string = jsonencode({
    username = "db_user"
    password = "db_password"
    host     = "your-db-instance.endpoint"
  })
}

# Crear una instancia de RDS
resource "aws_db_instance" "homepower_db" {
  identifier = "homepower-db"
  engine     = "postgres"
  instance_class = "db.t3.micro"
  username  = "admin"
  password  = "your-db-password"
  db_name   = "homepower_db"
  allocated_storage = 20
  storage_type      = "gp2"
  multi_az          = false
  skip_final_snapshot = true

  # VPC y Subnet configuration
  vpc_security_group_ids = ["your-sg-id"]
}

# Asociar el secreto a la aplicación, por ejemplo, usando App Runner
resource "aws_apprunner_service" "homepower_service" {
  service_name = "homepower-service"
  source_configuration {
    image_repository {
      image_identifier = "your-image:latest"
      image_repository_type = "ECR"
    }

    # Configurar la integración con Secrets Manager para variables de entorno
    environment_variables = {
      DB_HOST = jsondecode(aws_secretsmanager_secret_version.db_credentials_version.secret_string)["host"]
      DB_USER = jsondecode(aws_secretsmanager_secret_version.db_credentials_version.secret_string)["username"]
      DB_PASSWORD = jsondecode(aws_secretsmanager_secret_version.db_credentials_version.secret_string)["password"]
    }
  }
}
```

Este código de Terraform realiza lo siguiente:

1. Crea un secreto en AWS Secrets Manager con las credenciales de la base de datos.
2. Crea una instancia de **RDS** para la base de datos.
3. Configura un servicio de **AWS App Runner** que utilizará las credenciales almacenadas en Secrets Manager.

---


## 📌 Autor

Desarrollado por: **Miguelangel Rendón Cuartas**

---
