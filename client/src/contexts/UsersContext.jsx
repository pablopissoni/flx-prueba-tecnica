import { createContext, useState, useEffect } from "react";
import * as api from "../hooks/usersApi";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
  });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Se simula un retraso al cargar los datos
      await new Promise((resolve) => setTimeout(resolve, 2000));

      let data = await api.getUsers();

      setUsers(data);
      applyFilters(data); // Aplicar filtros a los nuevos datos
      setError(null);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  // Filtrado por búsqueda y estado
  const applyFilters = (users) => {
    let result = [...users];

    // Por búsqueda
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm) ||
          user.lastname.toLowerCase().includes(searchTerm) ||
          user.username.toLowerCase().includes(searchTerm)
      );
    }

    // Por estado
    if (filters.status) {
      result = result.filter((user) => user.status === filters.status);
    }

    setUsers(result);
  };

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  const createUser = async (userData) => {
    try {
      const newUser = await api.createUser(userData);
      setUsers((prev) => [newUser, ...prev]);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const updatedUser = await api.updateUser(id, userData);
      setUsers((prev) => prev.map((u) => (u.id === id ? updatedUser : u)));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const value = {
    users,
    loading,
    error,
    filters,
    setFilters,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  };

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}
