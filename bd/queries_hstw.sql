select concat(clientes.nombre, clientes.apellidos) as  'nombre', clientes.fecha_nacimiento, clientes.curp, clientes.rfc,
       from clientes;

delete from clientes where id_cliente=1;