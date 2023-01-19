#Agregar en el array lista los elementos a verificar si se repiten. Luego ejecutar

lista = []
if __name__ == '__main__':
 
    dup = [x for i, x in enumerate(lista) if i != lista.index(x)]
    print(dup)  # [1, 5, 1]